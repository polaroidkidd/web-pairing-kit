import { DemoComponent } from "@components/demoComponent";
import { demoUtilFunctionCapitalizeAllWordsInSentence } from "@utils/demoUtil";

export default function Home() {
  return (
    <>
      <h1>GYG Interview</h1>
      <DemoComponent />
      <div>
        {demoUtilFunctionCapitalizeAllWordsInSentence(
          "i have been capitalized"
        )}
      </div>
    </>
  );
}
