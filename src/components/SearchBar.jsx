
// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="flex justify-center mb-8">
            <input
                type="text"
                placeholder="Search for toys..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="p-2 border border-gray-300 rounded"
            />
        </div>
    );
};

export default SearchBar;
