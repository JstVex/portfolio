'use client'
import Image from "next/image";
import Section from "@/components/Layouts/Section";
import { GraphQLClient, gql } from 'graphql-request';
import { login } from '@/lib/literalApi';
import { ReadingState, ReadingStatesResponse } from '@/types/literal';
import { useEffect, useState } from "react";

const MY_READING_STATES_QUERY = gql`
  query {
    myReadingStates {
      status
      book {
        title
        authors {
          name
        }
        cover
      }
    }
  }
`;

const Reading = () => {
    const [books, setBooks] = useState<ReadingState[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const token = await login(process.env.NEXT_PUBLIC_LITERAL_EMAIL!, process.env.NEXT_PUBLIC_LITERAL_PASSWORD!);
                const client = new GraphQLClient('https://literal.club/graphql/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data: ReadingStatesResponse = await client.request(MY_READING_STATES_QUERY);

                const sortedBooks = data.myReadingStates.sort((a, b) => {
                    if (a.status === 'IS_READING' && b.status !== 'IS_READING') return -1;
                    if (a.status !== 'IS_READING' && b.status === 'IS_READING') return 1;
                    return 0;
                });

                setBooks(sortedBooks);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <Section title="Current Reads">
            <ul>
                {books.map((state) => (
                    <li key={state.book.title} className="flex items-center justify-between my-[0.85rem]">
                        <div className="flex items-center space-x-3">
                            <Image
                                width={48}
                                height={48}
                                src={state.book.cover}
                                alt={state.book.title}
                                className="w-12 h-[4.5rem] object-cover rounded-sm"
                            />
                            <div>
                                <h3 className="text-base">{state.book.title}</h3>
                                <p className="text-sm text-zinc-400">{state.book.authors.map((author) => author.name).join(', ')}</p>
                                <p className="text-sm text-zinc-500">
                                    {state.status === 'FINISHED' ? 'Finished Recently' : 'Currently Reading'}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}

export default Reading;