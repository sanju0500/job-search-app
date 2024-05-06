import { jobTypeOptions } from "./index";

export const filterHandler = (jobList = [], filters = {}) => {
  let updatedData = [];
  updatedData = jobList?.filter((job) => {
    // Role Filter
    let matchesRole =
      filters?.role === ""
        ? true
        : job?.jobRole?.toLowerCase() === filters?.role?.toLowerCase();

    // Min Experience Filter - Check if the exp lies in the exp range
    let matchesExp =
      filters?.minExp === ""
        ? true
        : filters?.minExp >= job?.minExp && job?.maxExp >= filters?.minExp;

    // Job Type Filter - For type:remote, location === remote. For type:onsite, location !== remote.
    let matchesJobType =
      filters?.jobType === ""
        ? true
        : filters?.jobType === jobTypeOptions[0]
        ? job?.location?.toLowerCase() === jobTypeOptions[0].toLowerCase()
        : job?.location?.toLowerCase() !== jobTypeOptions[0].toLowerCase();

    // Min Base Salary Filter - Check if the pay lies in the salary range
    let matchesPay =
      filters?.minBasePay === ""
        ? true
        : filters?.minBasePay >= job?.minJdSalary &&
          job?.maxJdSalary >= filters?.minBasePay;

    // Company Name Filter
    let matchesCompany =
      filters?.company?.trim() === ""
        ? true
        : job?.companyName
            ?.toLowerCase()
            .trim()
            .includes(filters?.company?.toLowerCase().trim());

    // Location Filter - Skip if location is remote
    let matchesLocation =
      filters?.location?.trim() === ""
        ? true
        : job?.location?.toLowerCase().trim() !==
          jobTypeOptions[0].toLowerCase()
        ? job?.location
            ?.toLowerCase()
            .trim()
            .includes(filters?.location?.toLowerCase().trim())
        : false;

    // Filtered job will have all the above values as true
    return (
      matchesRole &&
      matchesExp &&
      matchesJobType &&
      matchesPay &&
      matchesCompany &&
      matchesLocation
    );
  });

  return updatedData;
};
