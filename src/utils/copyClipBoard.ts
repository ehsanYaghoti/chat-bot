export default async function copyToClipboard(
  content: ClipboardItems | string
) {
  try {
    if (typeof window === "undefined") return;

    let result = undefined;

    if (typeof content === "string") {
      return (result = await window.navigator.clipboard.writeText(content));
    }

    return (result = await window.navigator.clipboard.write(content));
  } catch (error) {
    console.log(error);
    throw error;
  }
}
