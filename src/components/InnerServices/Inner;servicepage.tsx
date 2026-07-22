import { useParams, Navigate } from "react-router-dom";
import { getInnerServiceBySlug } from "./Innerservicesdata";
import InnerServiceTemplate from "./Innerservicetemplate";

export default function InnerServicePage() {
    const { slug } = useParams<{ slug: string }>();
    const service = slug ? getInnerServiceBySlug(slug) : undefined;

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return <InnerServiceTemplate service={service} />;
}

// ── Wiring this up ──────────────────────────────────────────────────────
// In your router (e.g. App.tsx / routes file):
//
//   import InnerServicePage from "./InnerServices/InnerServicePage";
//
//   <Route path="/InnerServices/:slug" element={<InnerServicePage />} />
//
// That single route covers all 24 services — no route needs to be added
// per service. Navbar links like /InnerServices/book-writing,
// /InnerServices/ghostwriting, etc. all resolve through this one page.