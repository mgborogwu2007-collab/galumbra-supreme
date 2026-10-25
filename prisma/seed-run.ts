import { prisma } from "@/lib/prisma";
import { ensureSeed } from "@/prisma/seed";

(async () => {
  await ensureSeed();
  console.log("Seed complete");
})();
