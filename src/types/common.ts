export type ScrollPosition = "start" | "between" | "end";
export type CarouselHookResult = {
  getLeftNavProps: () => { onClick: () => void };
  getRightNavProps: () => { onClick: () => void };
  isTouchDevice: boolean | null;
  navigate: (delta: number) => void;
  scrollAreaRef: React.RefObject<HTMLDivElement>;
  scrollPosition: ScrollPosition | null;
  showNav: boolean | null;
};
