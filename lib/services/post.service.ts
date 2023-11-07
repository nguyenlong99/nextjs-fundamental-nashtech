import ENDPOINT from "@/lib/enums/endpoint";

export async function getList() {
	const res = await fetch(`${ENDPOINT.host}/api/posts`);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export async function getPostDetail(postId: string) {
	const res = await fetch(`${ENDPOINT.host}/api/posts/${postId}`);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
