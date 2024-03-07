import paths from "@/utils/paths";
import LGroupImg from "./l_group.png";
import RGroupImg from "./r_group.png";
import AnythingLLMLogo from "@/media/logo/askagi-nobg.png";
import { useNavigate } from "react-router-dom";
import System from "@/models/system";
import showToast from "@/utils/toast";

export default function OnboardingHome() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {

    //for llms
    const llmdata = {LLMProvider: 'openai', OpenAiKey: '', OpenAiModelPref: 'gpt-3.5-turbo'}
    console.log('llmdata', llmdata);
    const { llmerror } = await System.updateSystem(llmdata);
    if (llmerror) {
      showToast(`Failed to save LLM settings: ${error}`, "error");
      return;
    }

    //for embeddings

    const embeddingdata = {EmbeddingEngine: 'openai', OpenAiKey: '', EmbeddingModelPref: 'gpt-3.5-turbo'}
    console.log('embeddingdata', embeddingdata);
    const { embeddingerror } = await System.updateSystem(embeddingdata);
   if (embeddingerror) {
      showToast(`Failed to save Embedding settings: ${error}`, "error");
      return;
    }

    //for vector dbs
    const vectordbdata = {VectorDB: 'lancedb'}
    console.log('vectordbdata', vectordbdata);
    const { vectordberror } = await System.updateSystem(vectordbdata);
    if (vectordberror) {
      showToast(`Failed to save VectorDB settings: ${error}`, "error");
      return;
    }

    

    navigate(paths.onboarding.userSetup());
  };
  return (
    <>
     <div class="relative h-full w-full bg-slate-950">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="relative w-screen h-screen flex overflow-hidden">

         


            <div className="relative flex justify-center items-center m-auto h-full">

              <div className="flex flex-col h-full">

                </div>
                <div className="flex flex-col  h-full justify-center items-center">
                  <p className="text-black font-thin text-[24px]">Welcome to</p>
           
                  <h1 className="text-white text-4xl font-bold">
                    AskAGI</h1>
            <button
            type="submit"
            onClick={handleSubmit}
              className="animate-pulse w-full md:max-w-[350px] md:min-w-[300px] text-center py-3 bg-white text-black font-semibold text-sm my-10 rounded-md hover:bg-gray-200"
            >
              Get started
            </button>
            </div>
              </div>
            </div>
          </div>

        </div>
    </>
  );
}
