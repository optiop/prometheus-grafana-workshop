import React from "react";
import GradientLine from "./ui/GradientLine";
import SlideTitle from "./ui/SlideTitle";

interface SlideGrafanaSceneCodeProps {
  title: string;
}

function SlideGrafanaSceneCode({
  title,
}: SlideGrafanaSceneCodeProps) {
  return (
    <>
    <section data-auto-animate>
      <div className="w-full">
        <SlideTitle title={title} />
        <GradientLine />
      </div>
      <div className="!w-full !h-full !flex !flex-col !justify-center !items-center">
        <pre>
          <code data-id="code-block">
            npx @grafana/create-plugin@latest  
          </code>
        </pre>
      </div>
    </section>
    <section data-auto-animate>
      <div className="w-full">
        <SlideTitle title={title} />
        <GradientLine />
      </div>
        <pre>
          <code data-id="code-block" >
          npx @grafana/create-plugin@latest <br />
          </code>
          <code data-id="proceed">
          Need to install the following packages: <br />
          @grafana/create-plugin@5.10.0 <br />
          Ok to proceed? (y)
          </code>
        </pre>
    </section>
    <section data-auto-animate>
      <div className="w-full">
        <SlideTitle title={title} />
        <GradientLine />
      </div>
        <pre>
          <code data-id="code-block" className="text-lg" >
          npx @grafana/create-plugin@latest <br />
          </code>
          <code data-id="proceed" className="text-lg">
          Need to install the following packages: <br />
          @grafana/create-plugin@5.10.0 <br />
          Ok to proceed? (y)
          </code>
          <code data-id="all-options" className="text-blue-300 text-lg">
            ? Select a plugin type …  <br />
            ❯ App (add custom pages, UI extensions and bundle other plugins) <br />
              Data source (query data from a custom source) <br />
              Panel (add a visualization for data or a widget) <br />
            </code>
            <code data-id="options" className="text-blue-300 text-lg">
              App with Scenes (create dynamic dashboards in app pages) <br />
          </code>
        </pre>
    </section>
    <section data-auto-animate>
      <div className="w-full">
        <SlideTitle title={title} />
        <GradientLine />
      </div>
        <pre>
          <code data-id="code-block" className="text-lg" >
          npx @grafana/create-plugin@latest <br />
          </code>
          <code data-id="proceed" className="text-lg">
          Need to install the following packages: <br />
          @grafana/create-plugin@5.10.0 <br />
          Ok to proceed? (y)
          </code>
          <code data-id="all-options" className="text-blue-300 text-lg">
            ? Select a plugin type …  <br />
            ❯ App (add custom pages, UI extensions and bundle other plugins) <br />
              Data source (query data from a custom source) <br />
              Panel (add a visualization for data or a widget) <br />
          </code>
          <code data-id="options" className="text-orange-300 text-lg">
              App with Scenes (create dynamic dashboards in app pages) <br />
          </code>
        </pre>
    </section>
    </>
  );
}

export default SlideGrafanaSceneCode;
