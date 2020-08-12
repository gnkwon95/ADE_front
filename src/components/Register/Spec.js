import React, { useRef, useState } from "react";
import InputWithPlus from "../CustomComponents/InputWithPlus";
import Internship from "../CustomComponents/Internship";

const Spec = ({ control, abilities, setAbilities, Extracurricular, setExtracurricular, WorkExperience, setWorkExperience }) => {
  return (
    <div>
      <h1>합격 당시 스펙</h1>
      <InputWithPlus placeholder="ex) 토익 xxx점" label={"보유 자격증 및 어학 시험 점수"} control={control} items={abilities} setItems={setAbilities} />
      <InputWithPlus placeholder="ex) SK SUNNY 대학생 자원 봉사단" label="대외 활동" control={control} items={Extracurricular} setItems={setExtracurricular} />

      <Internship WorkExperience={WorkExperience} setWorkExperience={setWorkExperience} control={control} />
    </div>
  );
};

export default Spec;
