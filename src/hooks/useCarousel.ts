// next & packages
import { CarouselHookResult, ScrollPosition } from "@/types/common";
import { useRef, useState, useCallback, useEffect } from "react";

export default function useCarousel(): CarouselHookResult {
  const scrollArea = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [scrollBy, setScrollBy] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition | null>(
    "start"
  );
  const [showNav, setShowNav] = useState<boolean | null>(null);

  const navigate = useCallback(
    (delta: number) => {
      scrollArea.current?.scroll({
        behavior: "smooth",
        left: scrollArea.current?.scrollLeft + scrollBy * delta,
      });
    },
    [scrollBy]
  );

  useEffect(() => {
    const scrollAreaNode = scrollArea.current;

    const calculateScrollPosition = () => {
      if (!scrollAreaNode) return;
      const { width } = scrollAreaNode.getBoundingClientRect();
      if (scrollAreaNode.scrollLeft === 0) {
        setScrollPosition("start");
      } else if (
        Math.round(scrollAreaNode.scrollLeft + width) ===
        scrollAreaNode.scrollWidth
      ) {
        setScrollPosition("end");
      } else {
        setScrollPosition("between");
      }
    };

    // Calculate scrollBy offset
    const calculateScrollBy = () => {
      if (!scrollAreaNode) return;
      const { width: containerWidth } = scrollAreaNode.getBoundingClientRect();
      setShowNav(scrollAreaNode.scrollWidth > containerWidth);
      const childNode = scrollAreaNode.querySelector(":scope > *");
      if (!childNode) return;
      const { width: childWidth } = childNode.getBoundingClientRect();
      setScrollBy(childWidth * Math.floor(containerWidth / childWidth));
    };

    const observer = new MutationObserver(calculateScrollBy);

    const attachListeners = () => {
      if (scrollAreaNode) observer.observe(scrollAreaNode, { childList: true });
      scrollAreaNode?.addEventListener("scroll", calculateScrollPosition);
      window.addEventListener("resize", calculateScrollBy);
    };

    const detachListeners = () => {
      observer.disconnect();
      scrollAreaNode?.removeEventListener("scroll", calculateScrollPosition);
      window.removeEventListener("resize", calculateScrollBy);
    };

    if (isTouchDevice === true) {
      detachListeners();
    }

    if (isTouchDevice === false) {
      attachListeners();
      calculateScrollBy();
      calculateScrollPosition();
    }

    return detachListeners;
  }, [isTouchDevice, navigate]);

  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    const handleMql = ({ matches }: any) => {
      setIsTouchDevice(!matches);
    };
    handleMql(mql);
    mql.addEventListener("change", handleMql);
    return () => {
      mql.removeEventListener("change", handleMql);
    };
  }, []);

  return {
    getLeftNavProps: () => ({
      onClick: () => navigate(-1),
    }),
    getRightNavProps: () => ({
      onClick: () => navigate(1),
    }),
    isTouchDevice,
    navigate,
    scrollAreaRef: scrollArea,
    scrollPosition,
    showNav,
  };
}
