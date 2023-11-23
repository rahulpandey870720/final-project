import React from "react";

export default function Prfile() {
  return (
    <ul className="list-group">
            <li className="list-group-item active" aria-current="true">Profile</li>
            <li className="list-group-item d-flex justify-content-between">
                <div>
                    Name
                </div>
                <div>
                    rahul
                </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <div>
                    Profile Image
                </div>
                <div>
                    <img style={{
                        height: "100px",
                        width: "200px"
                    }} src="https://www.etvhindu.com/wp-content/uploads/2022/08/%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%B9%E0%A5%88-%E0%A4%9C%E0%A4%B0%E0%A5%82%E0%A4%B0%E0%A5%80-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%8B%E0%A4%AB%E0%A4%BE%E0%A4%87%E0%A4%B2-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%A4%E0%A4%BF%E0%A4%B0%E0%A4%82%E0%A4%97%E0%A5%87-%E0%A4%95%E0%A5%80-%E0%A4%AB%E0%A5%8B%E0%A4%9F%E0%A5%8B-2.webp" />
                </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <div>
                    Contact Number
                </div>
                <div>
                    123456789
                </div>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <div>
                    Address
                </div>
                <div>
                  sector 16
                </div>
            </li>
        </ul>
    )
}
