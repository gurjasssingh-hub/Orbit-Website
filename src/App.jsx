import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Analytics from "./pages/Featurespages/Analytics";
import API from "./pages/Featurespages/API";
import Automation from "./pages/Featurespages/Automation";
import Collaboration from "./pages/Featurespages/Collaboration";
import Monitoring from "./pages/Featurespages/Monitoring";
import Security from "./pages/Featurespages/Security";


import Blog from "./pages/Resourcespages/Blog";
import Community from "./pages/Resourcespages/Community";
import Documentation from "./pages/Resourcespages/Documentation";
import Guides from "./pages/Resourcespages/Guides";
import Helpcenter from "./pages/Resourcespages/HelpCenter";
import Templates from "./pages/Resourcespages/Templates";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BookDemo from "./pages/BookDemo";
import SecurityReview from "./pages/SecurityReview";
import ApiAccess from "./pages/ApiAccess";
import ApiReference from "./pages/ApiReference";
import Docs from "./pages/Docs";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import FreeTrial from "./pages/FreeTrial";
import CustomPlan from "./pages/CustomPlan";
import CommunityJoinModal from "./pages/CommunityJoinModal";
import Support from "./pages/Support";
import SupportRequest from "./pages/SupportRequest";
import GettingStarted from "./pages/GettingStarted";
import Authentication from "./pages/Authentication";
import APIReference2 from "./pages/APIReference2";
import Webhooks from "./pages/Webhooks";
import Guides2 from "./pages/Guides2";
import SDKs from "./pages/SDKs";
import Examples from "./pages/Examples";
import ApiPlayground from "./pages/ApiPlayground";
 
import JavaScriptSDK from "./pages/codesdks/JavaScriptSDK";
import RestApiClient from "./pages/codesdks/RestApiClient";
import CommunitySDK from "./pages/codesdks/CommunitySDKs";
import NodeSDK from "./pages/codesdks/NodeSDK";
import PythonSDK from "./pages/codesdks/PythonSDK";
import ReactSDK from "./pages/codesdks/ReactSDK";
import CommunitySDKs from "./pages/codesdks/CommunitySDKs";

import CommunityDiscussions from "./pages/CommunityDiscussions";
import ShareYourStory from "./pages/ShareYourStory";
import Contribute from "./pages/Contribute";
import StartContributing from "./pages/StartContributing";
import ContributionGuidelines from "./pages/ContributionGuidelines";
import IncidentResponseTemplate from "./pages/IncidentResponseTemplate";
import CreateTemplate from "./pages/CreateTemplate";

import AccountLoginGuide from "./pages/Help/AccountLoginGuide";
import ApiIssuesGuide from "./pages/Help/ApiIssuesGuide";
import BillingPaymentsGuide from "./pages/Help/BillingPaymentsGuide";
import ReportBugPage from "./pages/Help/ReportBugPage";
import ResetPasswordPage from "./pages/Help/ResetPasswordPage";
import SecurityGuide from "./pages/Help/SecurityGuide";
import StatusPage from "./pages/Help/StatusPage";
import SupportPage from "./pages/Help/SupportPage";
import TroubleshootingGuide from "./pages/Help/TroubleshootingGuide";
import WorkflowsGuide from "./pages/Help/WorkflowsGuide";
import KnowledgeBasePage from "./pages/Resourcespages/KnowledgeBasePage";
import BestPracticesPage from "./pages/BestPracticesPage";
import GithubPage from "./pages/GithubPage";
import MigrationGuidePage from "./pages/MigrationGuidePage";
import ChangelogPage from "./pages/ChangelogPage";
import CommunityEventsPage from "./pages/CommunityEventsPage";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>


      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/features" element={<Features />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/resources" element={<Resources />} />


        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/SecurityReview" element={<SecurityReview />} />
        <Route path="/ApiAccess" element={<ApiAccess />} />
        <Route path="/ApiReference" element={<ApiReference />} />
        <Route path="/Docs" element={<Docs />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/FreeTrial" element={<FreeTrial />} />
        <Route path="/CustomPlan" element={<CustomPlan />} />
        <Route path="/CommunityJoinModal" element={<CommunityJoinModal />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/SupportRequest" element={<SupportRequest />} />
        <Route path="/GettingStarted" element={<GettingStarted />} />
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="/APIReference2" element={<APIReference2 />} />
        <Route path="/Webhooks" element={<Webhooks />} />
        <Route path="/Guides2" element={<Guides2 />} />
        <Route path="/SDKs" element={<SDKs />} />
        <Route path="/Examples" element={<Examples />} />
        <Route path="/CommunityDiscussions" element={<CommunityDiscussions />} />
        <Route path="/ShareYourStory" element={<ShareYourStory />} />
        <Route path="/Contribute" element={<Contribute />} />
        <Route path="/StartContributing" element={<StartContributing />} />
        <Route path="/ContributionGuidelines" element={<ContributionGuidelines />} />
        <Route path="/IncidentResponseTemplate" element={<IncidentResponseTemplate />} />
        <Route path="/CreateTemplate" element={<CreateTemplate />} />

          <Route path="/CommunitySDKs" element={<CommunitySDKs />} />
          <Route path="/JavaScriptSDK" element={<JavaScriptSDK />} />
          <Route path="/NodeSDK" element={<NodeSDK />} />
          <Route path="/PythonSDK" element={<PythonSDK />} />
          <Route path="/ReactSDK" element={<ReactSDK />} />
          <Route path="/RestApiClient" element={<RestApiClient />} />
       //Features

        <Route path="/Featurespages/analytics" element={<Analytics />} />
        <Route path="/Featurespages/API" element={<API />} />
        <Route path="/Featurespages/Automation" element={<Automation />} />
        <Route path="/Featurespages/Collaboration" element={<Collaboration />} />
        <Route path="/Featurespages/Monitoring" element={<Monitoring />} />
        <Route path="/Featurespages/Security" element={<Security />} />

        //Resources

        <Route path="/Resourcespages/Blog" element={<Blog />} />
        <Route path="/Resourcespages/Community" element={<Community />} />
        <Route path="/Resourcespages/Documentation" element={<Documentation />} />
        <Route path="/Resourcespages/Guides" element={<Guides />} />
        <Route path="/Resourcespages/Helpcenter" element={<Helpcenter />} />
        <Route path="/Resourcespages/Templates" element={<Templates />} />


        {/*HELP*/}

        <Route path="/Help/AccountLoginGuide" element={<AccountLoginGuide />} />
        <Route path="/Help/ApiIssuesGuide" element={<ApiIssuesGuide />} />
        <Route path="/Help/BillingPaymentsGuide" element={<BillingPaymentsGuide />} />
        <Route path="/Help/ReportBugPage" element={<ReportBugPage />} />
        <Route path="/Help/ResetPasswordPage" element={<ResetPasswordPage />} />
        <Route path="/Help/SecurityGuide" element={<SecurityGuide />} />
        <Route path="/Help/StatusPage" element={<StatusPage />} />
        <Route path="/Help/SupportPage" element={<SupportPage />} />
        <Route path="/Help/TroubleshootingGuide" element={<TroubleshootingGuide />} />
        <Route path="/Help/WorkflowsGuide" element={<WorkflowsGuide />} />

        <Route path="/KnowledgeBasePage" element={<KnowledgeBasePage />} />
        <Route path="/best-practices" element={<BestPracticesPage />}/>
        <Route path="/GithubPage" element={<GithubPage />}/>
        <Route path="/MigrationGuidePage" element={<MigrationGuidePage />}/>
        <Route path="/ChangelogPage" element={<ChangelogPage />}/>
        <Route path="/CommunityEventsPage" element={<CommunityEventsPage />}/>
      <Route path="*" element={<NotFound />} />
       
      </Routes>

      <Footer />
    </>
  );
};

export default App;
