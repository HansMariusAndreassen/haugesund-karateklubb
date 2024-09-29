import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import crypto from "crypto";

const secret = process.env.SANITY_WEBHOOK_SECRET as string;

function verifySignature(body: string, signature: string): boolean {
  const computedSignature = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(computedSignature)
  );
}

export async function POST(req: NextRequest) {
  const signature = req.headers.get("sanity-webhook-signature");
  const body = await req.text();

  if (!signature || !verifySignature(body, signature)) {
    console.error("Invalid signature");
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  try {
    const parsedBody = JSON.parse(body);
    console.log("Webhook triggered for document:", parsedBody._id);

    revalidatePath("/blogg");

    return NextResponse.json({ message: "Revalidation triggered" });
  } catch (err) {
    console.error("Error revalidating:", err);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
