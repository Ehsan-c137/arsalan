export function convertToUrl(title: string) {
   const url = title.replace(/ /g, "-").toLowerCase();
   return url;
}
