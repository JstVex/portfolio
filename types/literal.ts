export interface Author {
    name: string;
}

export interface Book {
    title: string;
    authors: Author[];
    cover: string;
}

export interface ReadingState {
    status: string;
    book: Book;
}

export interface ReadingStatesResponse {
    myReadingStates: ReadingState[];
}

export interface LoginResponse {
    login: {
        token: string;
    };
}