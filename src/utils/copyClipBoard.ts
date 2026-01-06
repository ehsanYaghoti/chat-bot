export default async function copyToClipboard(
  content: ClipboardItems | string
) {
  try {
    if (typeof window === "undefined") return;

    let result = undefined;

    if (typeof content === "string") {
       result = await window.navigator.clipboard.writeText(content);
       return result
    }

    result = await window.navigator.clipboard.write(content)
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
