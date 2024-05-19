"use server";

export async function getData() {
  const res = await fetch("https://demotrainiq.com/case/dashboard");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
