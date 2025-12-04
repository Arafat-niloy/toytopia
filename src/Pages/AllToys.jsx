import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ToyCard from "../Components/ToyCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [displayToys, setDisplayToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/toys.json") // আপনার ডাটা সোর্স অনুযায়ী লিংক ঠিক থাকবে
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setDisplayToys(data);
        setLoading(false);
      });
  }, []);

  // Search Function
  const handleSearch = () => {
    const filtered = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayToys(filtered);
  };

  // Sort Function (Ascending/Descending)
  const handleSort = (order) => {
    const sorted = [...displayToys].sort((a, b) => {
      if (order === "asc") return a.price - b.price;
      return b.price - a.price;
    });
    setDisplayToys(sorted);
  };

  if (loading) return <div className="text-center my-20"><span className="loading loading-spinner loading-lg text-primary"></span></div>;

  return (
    <div className="container mx-auto my-12 px-4">
      <Helmet><title>ToyTopia | All Toys</title></Helmet>
      
      <h2 className="text-4xl font-bold text-center mb-8 text-primary">All Toys Collection</h2>

      {/* Search & Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-base-200 p-4 rounded-xl">
        <div className="join">
          <input type="text" className="input input-bordered join-item" placeholder="Search by Toy Name" onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={handleSearch} className="btn btn-primary join-item">Search</button>
        </div>
        <div className="flex items-center gap-2">
            <span className="font-semibold">Sort by Price:</span>
            <select className="select select-bordered select-sm" onChange={(e) => handleSort(e.target.value)}>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
        </div>
      </div>

      {/* Grid: 4 cards per row for large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayToys.map((toy) => <ToyCard key={toy.toyId} toy={toy} />)}
      </div>
    </div>
  );
};

export default AllToys;