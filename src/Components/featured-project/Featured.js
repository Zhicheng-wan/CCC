import "./Featured.css";

import featuredJson from "../../Content/home.json";

function Featured() {
  return (
    <div className="fpPack">
      <div className="fpLayout">
        <div className="titleSection">
          <h1 className="title color">{featuredJson.featuredProjects.title}</h1>
          <h2 className="subtitle color">
            {featuredJson.featuredProjects.subtitle}
          </h2>
        </div>

        <div className="Project">
          <div className="Project1">
            <h2 className="Pro1Title">
              {"❇ " + featuredJson.featuredProjects.sections[0].title + " ❇"}
            </h2>

            <img
              src={featuredJson.featuredProjects.sections[0].imagePath}
              className="Pro1Photo"
              alt="Project1"
            />
            <div className="Pro1Descript txt color">
              {featuredJson.featuredProjects.sections[0].description}{" "}
              <a href={featuredJson.featuredProjects.sections[0].link}>
                Learn more
              </a>
            </div>
          </div>

          <div className="Project2">
            <h2 className="Pro2Title">
              {"❇ " + featuredJson.featuredProjects.sections[1].title + " ❇"}
            </h2>

            <img
              src={featuredJson.featuredProjects.sections[1].imagePath}
              className="Pro1Photo"
              alt="Project2"
            />
            <div className="Pro1Descript txt color">
              {featuredJson.featuredProjects.sections[1].description}{" "}
              <a href={featuredJson.featuredProjects.sections[1].link}>
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
