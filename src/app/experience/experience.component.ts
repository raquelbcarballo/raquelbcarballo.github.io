import { Component, OnInit } from '@angular/core';
import { ExperienceModule } from './experience.module';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  experienceModules: ExperienceModule[] = [
    new ExperienceModule("💻 Full-Stack Engineer",
      "August 2022 - Present",
      "Efimob",
      "Company in charge of the electric mobility sector.",
      ["Go", "Angular","HTML", "CSS", "TypeScript", "NestJS","MQTT", "AWS","Git"]),
    new ExperienceModule("💻 Full-Stack Engineer",
      "June 2021 - August 2022",
      "Salcotech S.L.",
      "Company in charge of the development of a new technology in relation to the tire.",
      ["Flutter", "Vue", "HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL", "AWS", "FreeCad","Git"]),
    new ExperienceModule("🩰 Dance teacher",
      "September 2020 - Present",
      "Inés Núñez",
      "Classes for children between 3 and 12 years old", []),
    new ExperienceModule("💻 Developer Engineer",
      "September 2019 - June 2021",
      "i+D3",
      "Company in charge of the development and instalation of parkings.",
      ["C++", "QA","Git"]),
    new ExperienceModule("🩰 Dance teacher",
      "October 2019 - April 2020",
      "Baas Ballet",
      "Classes for children between 6 and 16 years old", []),
    new ExperienceModule("🤖 Industrial Engineer",
      "July 2017 - August 2017",
      "Ledisson AIT",
      "Company in charge of the automatization of process to increase productivity, eficience and solve problems.",
      ["i+D", "ABB", "Kuka", "Fanuc"]),
  ];
  
  ngOnInit(): void {
  }

}
