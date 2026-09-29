import SplitLayout from "@/components/SplitLayout";
import Profile from "@/components/Profile";
import Details from "@/components/Details";
import Gallery from "@/components/Gallery";

export default function Home() {
  // Desktop: [Profile + Details] | [Gallery], each pane scrolling on its own.
  // Mobile: Profile → Gallery → Details in one normal scroll.
  return (
    <SplitLayout
      left={
        <>
          <Profile />
          <div className="hidden lg:block"><Details /></div>
        </>
      }
      right={<Gallery />}
      mobileAfter={<Details />}
    />
  );
}
