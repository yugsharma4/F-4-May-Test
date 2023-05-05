// The profile page will fetch the data wrt id that is stored in redux state.

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import { addProfileData, removeProfileData } from "./profileSlice";
import { removeLoginData } from "../Login/loginSlice";

export default function Profile() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [profileStatus, setProfileStatus] = useState("pending");
  let id = useSelector((state) => state.login.userId);
  let [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setData(data);
          setProfileStatus("fulfilled");
          dispatch(addProfileData(data));
        }
      });
    return () => {
      ignore = true;
    };
  }, [dispatch, id]);

  // redndering the fetched user data wrt the id
  return profileStatus === "fulfilled" ? (
    <div className="text-slate-800 font-[500] w-[99.9%] bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="w-full flex flex-col pl-48 pr-48 pt-12 pb-12 backdrop-blur-md bg-white/30 divide-y-2 divide-slate-800 md:p-8 tall:p-8 xs:p-4">
        <h1 className="text-3xl pb-8 text-center">Welcome {data.firstName}</h1>

        {/* personal information */}
        <div name="personal-info" className="text-xl xs:text-base">
          <h2 className="text-2xl pt-8 xs:text-xl">
            <img src="./person48.png" alt="person" className="inline-block" />{" "}
            Personal information
          </h2>
          <div className="flex gap-16 items-start pt-8 pb-8 sm:flex-col sm:gap-0 sm:pb-0 md:gap-4">
            {" "}
            <div className="sm:pb-4 w-[250px] sm:w-full">
              <img
                src={data.image}
                alt="profile pic"
                width="100%"
                className="border-4 border-slate-800 p-1 border-solid rounded-3xl"
              />
            </div>
            <ul
              role="list"
              className="list-inside list-image-[url(/person.png)]"
            >
              <li className="mb-4">First Name: {data.firstName}</li>
              <li className="mb-4">Last Name: {data.lastName}</li>
              <li className="mb-4">Maiden Name: {data.maidenName}</li>
            </ul>
            <ul
              role="list"
              className="list-inside list-image-[url(/person.png)]"
            >
              <li className="mb-4">Age: {data.age}</li>
              <li className="mb-4">Gender: {data.gender.toUpperCase()}</li>
              <li className="mb-4">Birth Date: {data.birthDate}</li>
            </ul>
            <ul
              role="list"
              className="list-inside list-image-[url(/person.png)]"
            >
              <li className="mb-4">Height: {data.height}cms</li>
              <li className="mb-4">Weight: {data.weight} kgs</li>
              <li className="mb-4">Blood Group: {data.bloodGroup}</li>
              <li className="mb-4">Eye Color: {data.eyeColor}</li>
            </ul>
          </div>
          <div className="flex gap-8 justify-start pb-8 sm:flex-col sm:gap-0 sm:pb-4">
            <li className="mb-4 list-inside list-image-[url(/person.png)]">
              University: {data.university}
            </li>
            <li className="mb-4 list-inside list-image-[url(/person.png)]">
              Hair: {data.hair.color} & {data.hair.type}
            </li>
          </div>
        </div>

        {/* contact information */}
        <div name="contact-info" className="text-xl xs:text-base">
          <h2 className="text-2xl pt-8 xs:text-xl">
            <img src="./contact48.png" alt="person" className="inline-block" />{" "}
            Contact information
          </h2>
          <div className="flex gap-16 items-start pt-8 pb-8 sm:flex-col sm:gap-0 sm:pb-4 md:gap-4">
            <ul role="list" className="list-inside">
              <li className="mb-4 list-image-[url(/phone.png)]">
                Phone Number: {data.phone}
              </li>
              <li className="mb-4 list-image-[url(/mail.png)]">
                Email ID: {data.email}
              </li>
            </ul>
            <ul role="list" className="list-inside list-image-[url(/map.png)]">
              <li className="mb-4 ">Address: {data.address.address}</li>
              <li className="mb-4 ">City: {data.address.city}</li>
              <li className="mb-4 ">Postal Code: {data.address.postalCode}</li>
              <li className="mb-4 ">State: {data.address.state}</li>
            </ul>
            <ul role="list" className="list-inside list-image-[url(/map.png)]">
              <li className="mb-4 ">
                Latitude: {data.address.coordinates.lat}{" "}
              </li>
              <li className="mb-4 ">
                Longitude: {data.address.coordinates.lng}
              </li>
            </ul>
          </div>
        </div>

        {/* Company Details*/}
        <div name="company-details" className="text-xl xs:text-base">
          <h2 className="text-2xl pt-8 xs:text-xl">
            <img src="./company.png" alt="person" className="inline-block" />{" "}
            Company Details
          </h2>
          <div className="flex gap-16 items-start pt-8 pb-8 sm:flex-col sm:gap-0 sm:pb-4 md:gap-4">
            <ul
              role="list"
              className="list-inside list-image-[url(/company24.png)]"
            >
              <li className="mb-4">Name: {data.company.name}</li>
              <li className="mb-4">Department: {data.company.department}</li>
              <li className="mb-4">Title: {data.company.title}</li>
            </ul>
            <ul role="list" className="list-inside list-image-[url(/map.png)]">
              <li className="mb-4 ">Address: {data.company.address.address}</li>
              <li className="mb-4 ">City: {data.company.address.city}</li>
              <li className="mb-4 ">
                Postal Code: {data.company.address.postalCode}
              </li>
              <li className="mb-4 ">State: {data.company.address.state}</li>
            </ul>
            <ul role="list" className="list-inside list-image-[url(/map.png)]">
              <li className="mb-4 ">
                Latitude: {data.company.address.coordinates.lat}{" "}
              </li>
              <li className="mb-4 ">
                Longitude: {data.company.address.coordinates.lng}
              </li>
            </ul>
          </div>
        </div>

        {/* Bank details */}
        <div name="bank-details" className="text-xl xs:text-base">
          <h2 className="text-2xl pt-8 xs:text-xl">
            <img src="./bank48.png" alt="person" className="inline-block" />{" "}
            Bank Details
          </h2>
          <div className="flex gap-16 items-start pt-8 pb-8 sm:flex-col sm:gap-0 sm:pb-4 md:gap-4">
            <ul role="list" className="list-inside list-image-[url(/bank.png)]">
              <li className="mb-4">Card Number: {data.bank.cardNumber}</li>
              <li className="mb-4">
                Card Type: {data.bank.cardType.toUpperCase()}
              </li>
            </ul>
            <ul role="list" className="list-inside list-image-[url(/bank.png)]">
              <li className="mb-4 ">Card Expiry: {data.bank.cardExpire}</li>
              <li className="mb-4 ">IBAN: {data.bank.iban}</li>
            </ul>
            <ul role="list" className="list-inside list-image-[url(/bank.png)]">
              <li className="mb-4 ">
                Currency: {data.bank.currency.toUpperCase()}
              </li>
            </ul>
          </div>
        </div>

        {/* Network Details */}
        <div name="network-details" className="text-xl xs:text-base">
          <h2 className="text-2xl pt-8 xs:text-xl">
            <img src="./network48.png" alt="person" className="inline-block" />{" "}
            Network Details
          </h2>
          <div className="flex gap-16 items-start pt-8 pb-8 sm:flex-col sm:gap-0 sm:pb-4 md:gap-4">
            <ul
              role="list"
              className="list-inside list-image-[url(/network.png)]"
            >
              <li className="mb-4">Domain Name: {data.domain}</li>
              <li className="mb-4">IP Address: {data.ip}</li>
            </ul>
            <ul
              role="list"
              className="list-inside list-image-[url(/network.png)]"
            >
              <li className="mb-4 ">MAC Address: {data.macAddress}</li>
              <li className="mb-4 ">
                User Agent: {data.userAgent.substring(0, 29)}
              </li>
            </ul>
            <ul
              role="list"
              className="list-inside list-image-[url(/network.png)]"
            >
              <li className="mb-4 ">EIN: {data.ein}</li>
              <li className="mb-4 ">SSN: {data.ssn}</li>
            </ul>
          </div>
        </div>

        {/* Account Details */}
        <div name="network-details" className="text-xl xs:text-base">
          <h2 className="text-2xl pt-8 xs:text-xl">
            <img src="./account48.png" alt="person" className="inline-block" />{" "}
            Account Details
          </h2>
          <div className="flex gap-16 justify-between pt-8 pb-8 sm:flex-col sm:gap-0 sm:pb-4 md:gap-4">
            <li className="mb-4 list-inside list-image-[url(/username.png)]">
              User Name: {data.username}
            </li>
            <li className="mb-4 list-inside list-image-[url(/password.png)]">
              Password: {data.password}
            </li>
            <button
              onClick={() => {
                dispatch(removeProfileData(null));
                dispatch(removeLoginData());
                navigate("/");
              }}
              className="text-slate-800 bg-gradient-to-r from-pink-500 to-yellow-500 pt-2 pb-2 pl-8 pr-8 rounded-xl"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
