const API = {
	addProject: "/Projects/AddProject",
	statistics: "/Projects/GetStatics",
	getProject: (id: number) => `/Projects/GetProjectById?id=${id}`,
	getSearchQuery: (query: string) => `/Projects/SearchProjects?query=${query}`,
	getProjects: "/Projects/GetProjects",
	getReports: "/Projects/GetReports",
};

export { API };
