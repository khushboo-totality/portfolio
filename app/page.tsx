import SplitLayout from "@/components/SplitLayout";
import Profile from "@/components/Profile";
import Details from "@/components/Details";
import Gallery from "@/components/Gallery";

export default function Home() {
  // Desktop: [Profile + Details] | [Gallery], each pane scrolling on its own.
  // Mobile: Profile intro → Gallery in the page; Profile + Details also open as a drawer
  // from the floating Profile button.
  return (
    <SplitLayout
      left={
        <>
          <Profile />
          <Details />
        </>
      }
      right={
        <>
          <div className="lg:hidden"><Profile inline /></div>
          <Gallery />
        </>
      }
    />
  );
}
