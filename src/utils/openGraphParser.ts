export const openGraphParser = async (url: string) => {
  try {
    const response = await fetch(url);
    return response.text();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const domParser = (document: Document) => {
  const title = document.querySelector("title")?.textContent;
  const description = document
    .querySelector("meta[name='description']")
    ?.getAttribute("content");

  const linkUrl = document
    .querySelector("meta[property='og:url']")
    ?.getAttribute("content");

  const imageUrl = document
    .querySelector("meta[property='og:image']")
    ?.getAttribute("content");

  const faviconElement = document.querySelectorAll('link[rel="icon"]');
  let favicon;

  for (let i = 0; i < faviconElement.length; i++) {
    const size = faviconElement[i].getAttribute("sizes");

    if (size === "16x16") {
      favicon = faviconElement[i].getAttribute("href");
      break;
    }
  }

  return { title, description, linkUrl, imageUrl, favicon };
};
