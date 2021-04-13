import { React, useObsidian } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      br: any;
      pre: any;
      code: any;
      label: any;
      select: any;
      option: any;
      p: any;
      input: any;
    }
  }
}

const Response = (props: any) => {
  const { dashResponse } = props;

  return (
    <div className="w-11/12 bg-black border overflow-hidden shadow rounded-xl ml-2 mt-2 mr-4 mb-2">
      <div className="w-max h-full rounded-xl overflow-auto">
        <div className="px-4 py-3 sm:p-6">
          <pre className="flex flex-column max-w-full text-white">
            Response:
            <code className="text-wrap overflow-auto max-w-full text-yellow-600">
              {JSON.stringify(dashResponse)}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};
export default Response;
