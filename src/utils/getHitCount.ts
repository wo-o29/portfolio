const getHitCount = (svgString: string) => {
  // 입력받은 SVG 문자열을 파싱하여 DOM 객체로 변환
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");

  const hitCountText = doc
    ?.querySelector("text:nth-child(4)")
    ?.textContent?.trim();

  if (!hitCountText) {
    return ["0", "0"];
  }

  return hitCountText.split("/");
};

export default getHitCount;
