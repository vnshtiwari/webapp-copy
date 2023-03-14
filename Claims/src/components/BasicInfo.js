import React, { useState } from "react";

import img from "../assets/images/people-family.svg";

export default function BasicInfo({
  basicData,
  setBasicData,
  error,
  validate,
}) {
  return (
    <div class="container pad-l-8 pad-r-8 pt-30">
      <div class="col-md-7 col-sm-6 col-xs-12 master-header">
        <h2 class="h2-v2 mr-t-sm-30 ">File Health Insurance Claim Online</h2>
        <p class="mr-t-15 ">We are here to help you on your claim process.</p>
        <div>
          <img class="img-responsive" src={img} alt="" />
        </div>
      </div>
      <div
        class="col-md-4 col-sm-6 col-xs-12 master-form master-form--pad ng-hide"
        id="health-cliam-home-form"
        ng-show="healthClaimHomeCtrl.policyNumberLogin"
      >
        <div class="login-form-heading">Policy Holder Mobile Number</div>
        <div class="login-form-info">
          OTP will be send on this number for verification
        </div>

        <p>Mobile Number</p>

        <div class="form-group input-field-wrapper" id="mobile-container">
          <input
            type="tel"
            class="form-control input-data-field ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength"
            name="mobile-number"
            limit-to="10"
            autocomplete="tel"
            ng-model="healthClaimHomeCtrl.mobileNumber"
            id="mobile-number"
            maxlength="10"
            ng-blur="healthClaimHomeCtrl.emptyErrorMsg(healthClaimHomeCtrl.mobileNumber);"
          />
          <p class="mobile-number__prefix">+91</p>
        </div>
        <input
          type="hidden"
          id="getquoteUrl"
          value=".html"
          autocomplete="something-new"
        />
        <center>
          <button
            type="submit"
            class="btn btn2 btn-primary renew-btn get-quote-btn-common"
            role="button"
            ng-click="healthClaimHomeCtrl.registerMobileNumberHomeClaim()"
            ng-disabled="healthClaimHomeCtrl.IsDisabled"
          >
            Register Claim
          </button>
        </center>
        <div class="align-text-center">
          <a
            class="font-16-700 color-active"
            ng-click="healthClaimHomeCtrl.memberIdLoginCard()"
          >
            Register with your Policy Number
          </a>
        </div>
      </div>
      <div class="col-md-7 col-sm-6 col-xs-12 master-header">
        <h2 class="h2-v2 mr-t-sm-30 ">File Health Insurance Claim Online</h2>
        <p class="mr-t-15 ">We are here to help you on your claim process.</p>
        <div>
          <img class="img-responsive" src={img} alt="" />
        </div>
      </div>
      <div
        class="col-md-4 col-sm-6 col-xs-12 master-form master-form--pad master-form-file-claim"
        id="health-cliam-home-form-MemberId"
        ng-show="healthClaimHomeCtrl.memberIdLogin"
      >
        <div
          class="w-100 pl-0 input-wrapper-animation form-group input-field-wrapper"
          id="mobile-container"
        >
          <input
            type="text"
            class="form-control input-data-field text-capitalize ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength"
            name="member-Id"
            required=""
            limit-to="10"
            ng-model="healthClaimHomeCtrl.policyNumber"
            id="member-Id"
            ng-click="healthClaimHomeCtrl.errorMsg=''"
            maxlength="10"
          />
          <label for="">Policy Number</label>
        </div>

        <div class="searchfield-input radio-wrapper radioContainer w-100">
          <label class="radio-input-label w-49 radio-block" id="paddingRight">
            <input
              type="radio"
              name="registration-type"
              value="dob"
              ng-checked="healthClaimHomeCtrl.selectedDateType"
              ng-model="healthClaimHomeCtrl.selectedDateType"
              ng-click="healthClaimHomeCtrl.dateTypeSelection('dob')"
              role="radio"
              class="date-type ng-pristine ng-untouched ng-valid ng-not-empty"
            />
            <div class="radio-input" id="oneWayTrip"></div>
            <div class="radio-input-text font-12-400" id="one-way">
              Date of Birth
            </div>
          </label>
          <label class="radio-input-label w-49" id="paddingRight">
            <input
              type="radio"
              name="registration-type"
              value="start"
              ng-checked="healthClaimHomeCtrl.selectedDateType"
              ng-model="healthClaimHomeCtrl.selectedDateType"
              ng-click="healthClaimHomeCtrl.dateTypeSelection('start')"
              role="radio"
              class="date-type ng-pristine ng-untouched ng-valid ng-not-empty"
            />
            <div class="radio-input" id="oneWayTrip"></div>
            <div class="radio-input-text font-12-400" id="one-way">
              Policy Start Date
            </div>
          </label>
          <span class="hrline"></span>
          <label class="radio-input-label w-49" id="right-label">
            <input
              type="radio"
              name="registration-type"
              value="end"
              ng-model="healthClaimHomeCtrl.selectedDateType"
              ng-checked="healthClaimHomeCtrl.selectedDateType"
              ng-click="healthClaimHomeCtrl.dateTypeSelection('end')"
              role="radio"
              class="date-type ng-pristine ng-untouched ng-valid ng-not-empty"
            />
            <div class="radio-input" id="roundTrip"></div>
            <div class="radio-input-text font-12-400" id="two-way">
              Policy End Date
            </div>
          </label>
        </div>
        <div
          class=" w-100 input-wrapper-without-animation m-b-15 input-field-wrapper"
          id="mobile-container"
        >
          <input
            name="policy-start-date"
            id="policy-start-date"
            ng-enter="healthClaimHomeCtrl.registerCovidClaim()"
            ng-click="healthClaimHomeCtrl.errorMsg=''"
            placeholder="DD/MM/YYYY"
            role="textbox"
            ng-model="healthClaimHomeCtrl.policyStartDate"
            limit-to="10"
            restrict-input="{type: 'numbersOnly',allow: '\/'}"
            required=""
            date-input="healthClaimHomeCtrl.policyStartDate"
            class="form-control input-data-field ng-pristine ng-untouched ng-isolate-scope ng-empty ng-invalid ng-invalid-required"
          />
          <label class="ng-binding">Policy Start Date</label>
          <div class="error-msg error-msg-claim ng-binding"></div>
        </div>

        <input
          type="hidden"
          id="getquoteUrl"
          value=".html"
          autocomplete="something-new"
        />
        <center>
          <button
            type="submit"
            class="btn btn2 btn-primary renew-btn get-quote-btn-common"
            role="button"
            ng-click="healthClaimHomeCtrl.registerCovidClaim()"
            ng-class="{'btn-loading':healthClaimHomeCtrl.IsDisabled}"
          >
            Register Claim
          </button>
        </center>
        <div class="align-text-center"></div>
      </div>
    </div>
  );
}
