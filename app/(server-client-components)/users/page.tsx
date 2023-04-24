import { UsersChild } from '@/components/UsersChild';
import { UserInfo } from '@/components/UsersInfo';

import { fetch } from 'next/dist/compiled/@edge-runtime/primitives/fetch';

export const dynamic = 'force-dynamic';

interface PostsInfoProps {
    searchParams: string;
}

interface Post {
    id: 1;
    title: string;
    body: string;
    userId: number;
    tags: string[];
}

interface Posts {
    posts: Post[];
}

async function getPosts(): Promise<Posts> {
    const res = await fetch('https://dummyjson.com/posts', {
        cache: 'no-store',
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api/?inc=name', {
        cache: 'no-store',
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Users() {
    //const data = await getPosts();
    const data = await getRandomUser();
    return (
        <div>
            <h2>Posts (Server Component)</h2>
            <p>
                Dynamic Route: Server Component - ClientComponent -
                ServerComponent
            </p>
            <br />
            <p>{new Date().toLocaleString('ru')}</p>
            <br />
            <UsersChild>
                <UserInfo />
            </UsersChild>

            <br />
            {/*{data.posts.map((post) => (*/}
            {/*    <div key={post.id}>{post.title}</div>*/}
            {/*))}*/}

            {data.results[0].name.first}
        </div>
    );
}
