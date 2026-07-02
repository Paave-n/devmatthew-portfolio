import ResumeHero from "../../components/resume/ResumeHero";
import ResumeSummary from "../../components/resume/ResumeSummary";
import ResumeHighlights from "../../components/resume/ResumeHighlights";
import ResumeExperience from "../../components/resume/ResumeExperience";
import ResumeBrands from "../../components/resume/ResumeBrands";
import ResumeFooter from "../../components/resume/ResumeFooter";
import ResumeSkills from "../../components/resume/ResumeSkills";

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-black text-white">

            <div className="mx-auto max-w-4xl px-8 py-12">

                <ResumeHero />

                <ResumeSummary />

                <ResumeExperience />

                <ResumeHighlights />

                <ResumeBrands />

                <ResumeSkills />

                <ResumeFooter />

            </div>

        </main>
    );
}