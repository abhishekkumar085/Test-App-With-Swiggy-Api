export const handleSearch = (searchText, restaurants) => {
  const filterData =restaurants.filter((item) =>
   item?.info?.name.toLowerCase().includes(searchText)
  );
  return filterData;
};
