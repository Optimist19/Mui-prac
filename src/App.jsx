import "./App.css";
import AutoComplete from "./components/AutoComplete";
import AutoComplete2 from "./components/AutoComplete2";
import Layout from "./components/Layout";
import MuiAccordion from "./components/MuiAccordion";
import MuiAccordion2 from "./components/MuiAccordion2";
import MuiAlert from "./components/MuiAlert";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiButton from "./components/MuiButton";
import MuiCard from "./components/MuiCard";
import MuiCheckBox from "./components/MuiCheckBox";
import MuiCheckBox2 from "./components/MuiCheckBox2";
import MuiChip from "./components/MuiChip";
import MuiDrawer from "./components/MuiDrawer";
import MuiImageList from "./components/MuiImageList";
import MuiLink from "./components/MuiLink";
import MuiNavbar from "./components/MuiNavbar";
import MuiProgress from "./components/MuiProgress";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiRating from "./components/MuiRating";
import MuiResponsiveness from "./components/MuiResponsiveness";
import MuiSelect from "./components/MuiSelect";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiSnackbar from "./components/MuiSnackbar";
// import MuiSPeedDail from "./components/MuiSPeedDail";
import MuiSwitch1 from "./components/MuiSwitch1";
import MuiSwitch2 from "./components/MuiSwitch2";
import MuiTable from "./components/MuiTable";
import MuiTextField from "./components/MuiTextField";
import MuiTooltip from "./components/MuiTooltip";
import MuiTypography from "./components/MuiTypography";
import MuiDialog from "./MuiDialog";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
      <MuiCheckBox2 />
      <MuiSwitch1 />
      <MuiSwitch2 />
      <MuiRating />
      <AutoComplete />
      <AutoComplete2 />
      <Layout />
      <MuiCard />
      <MuiAccordion />
      <MuiAccordion2 />
      <MuiImageList />
      <MuiNavbar />
      <MuiLink />
      <MuiDrawer />
      {/* <MuiSPeedDail /> */}
      <MuiAvatar />
      <MuiBadge />
      <MuiChip />
      <MuiTooltip />
      <MuiTable />
      <MuiAlert />
      <MuiSnackbar />
      <MuiDialog />
      <MuiProgress />
      <MuiSkeleton />
      <MuiResponsiveness/>
    </div>
  );
}

export default App;
