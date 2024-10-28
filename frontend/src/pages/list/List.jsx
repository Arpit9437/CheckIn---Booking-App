import "./list.css";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { SearchItem } from "../../components/searchitem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange 
                onChange={items => setDate([items.selection])}
                minDate={new Date()}
                ranges={date}
              />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOpenText">Min price <small>per night</small></span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOpenText">Min price <small>per night</small></span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOpenText">Max price<small>per night</small></span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOpenText">Adult</span>
                <input type="number" className="lsOptionInput" placeholder={options.adult} min={1}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOpenText">Children</span>
                <input type="number" className="lsOptionInput" placeholder={options.children} min={0}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOpenText">Room</span>
                <input type="number" className="lsOptionInput" placeholder={options.room} min={1}/>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div> 
    </div>
  );
};

export default List;
