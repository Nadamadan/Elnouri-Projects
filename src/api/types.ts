interface ApiResponse<TR> {
	statusCode: number;
	isSuccess: boolean;
	message: string;
	data: TR | null;
}

interface ProjectSummary {
	id: number;
	name: string;
	continent: string;
	country: string;
	city: string;
	imageUrl: string;
}

interface ProjectDetail {
	id: number;
	name: string;
	about: string;
	imageUrl: string;
	startTime: string;
	type: string;
	continent: string;
	country: string;
	city: string;
	area: number;
	cost: number;
	profit: number;
	endTime: string;
}

interface Report {
	id: number;
	name: string;
	continent: string;
	country: string;
	city: string;
	imageUrl: string;
	area: number;
	cost: number;
	year: number;
	profit: number;
}

interface Statistics {
	numberOfProjects: number;
	numberOfProjectsWithProfit: number;
	costOfProjects: number;
	costOfProjectsWithProfit: number;
}

interface Filters {
	limit: number;
	pageNumber: number;
	year?: number;
	type?: string;
	continent?: string;
	country?: string;
	city?: string;
}

type Reports = Report[];

export type {
	ApiResponse,
	ProjectSummary,
	ProjectDetail,
	Report,
	Statistics,
	Reports,
	Filters,
};
