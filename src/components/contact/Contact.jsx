import React, { useState, useRef } from "react";
import "./Contact.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";

import * as yup from "yup";
const Contact = () => {
  const re =
    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;
  const pass =
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i;

  const schema = yup
    .object({
      user_name: yup.string().required(),
      user_email: yup
        .string()
        .email("Invalid email format")
        .required("Required"),
      user_age: yup.number().min(18).max(99).positive().integer().required(),
      user_image: yup.string().matches(re, "URL is not valid"),
      user_password: yup
        .string()
        .matches(
          pass,
          "at least one lowercase and one uppercase and 6 character"
        ),
      user_c_password: yup
        .string()
        .required("Password is mendatory")
        .oneOf([yup.ref("user_password")], "Passwords does not match"),
    })
    .required();
  const defaultValues = {
    ReactDatepicker: new Date(),
    user_gender: "Male",
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    reset,
  } = useForm({ defaultValues, resolver: yupResolver(schema) });

  // const sendEmail = (data) => {
  //   console.log(data);
  //   emailjs
  //     .sendForm(
  //       "service_rpopu0h",
  //       "template_n9j9pzi",
  //       data,
  //       "ztSRBB5y0lvIS6aip"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   reset();
  // };
  const confirm = "<h2>Your Data submitted successfully</h2>"
  const onSubmit = data => {
    alert(confirm); reset()}
  

  return (
    <div className="contact" id="contact">
      <div>
        <span>Register in </span>
        <span className="stroke-text">FitClub </span>
      </div>

      <form className="register_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_inner">
          <div className="left-c">
            <div>
              <input
                type="text"
                {...register("user_name")}
                placeholder="Enter your name"
              />
              <p style={{ color: "var(--orange)" }}>
                {errors.user_name?.message}
              </p>
            </div>
            <div>
              <input
                type="email"
                {...register("user_email")}
                placeholder="Enter your email"
              />
              <p style={{ color: "var(--orange)" }}>
                {errors.user_email?.message}
              </p>
            </div>
            <div>
              <input
                type="text"
                name="user_age"
                {...register("user_age")}
                placeholder="Enter your age"
              />
              <p style={{ color: "var(--orange)" }}>
                {errors.user_age?.message}
              </p>
            </div>
            <div>
              <select name="user_profession" {...register("user_profession")}>
                <option selected disabled>
                  Select profession
                </option>
                <option value="f-job">Full time Jobholder</option>
                <option value="student">Student</option>
                <option value="p-job">Per time jobholder</option>
                <option value="housewife">Housewife</option>
              </select>
            </div>
          </div>

          <div className="right-c">
            <div>
               {" "}
              <input
                type="radio"
                id="gender"
               
                value="Male"
                {...register("user_gender")}
              />
                <label for="gender">Male</label>
               {" "}
              <input
                type="radio"
                id="gender"
              
                value="Female"
                {...register("user_gender",)}
              />
                <label for="gender">Female</label>
            </div>
            <div>
              <input
                type="url"
                name="user_image"
                {...register("user_image")}
                placeholder="Enter image url"
              />
              <p style={{ color: "var(--orange)" }}>
                {errors.user_image?.message}
              </p>
            </div>
            <div>
              <Controller
                control={control}
                name="ReactDatepicker"
                render={({ field }) => (
                  <DatePicker
                    className="input"
                    onChange={(e) => field.onChange(e)}
                    selected={field.value}
                    placeholderText={"dd/mm/yyyy"}
                    showYearDropdown // year show and scrolldown alos
                    scrollableYearDropdown
                    showMonthDropdown
                  />
                )}
              />
            </div>
            <div>
              <input
                type="password"
                name="user_password"
                placeholder="Password"
                {...register("user_password")}
              />
              <p style={{ color: "var(--orange)" }}>
                {errors.user_password?.message}
              </p>
            </div>
            <div>
              <input
                type="password"
                name="user_c_password"
                placeholder="Confirm Password"
                {...register("user_c_password")}
              />
              <p style={{ color: "var(--orange)" }}>
                {errors.user_c_password?.message}
              </p>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-c">
          Register
        </button>
      </form>
    </div>
  );
};

export default Contact;
