import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { IBook } from '../../Globals';
import { card_div } from '../../css';

export default class PickBook extends React.Component {
    books: Array<IBook>;

    constructor(public props: Readonly<any>) {
        super(props);
        this.books = [
            {
                name: 'Cat In the Hat',
                author: 'Dr. Seuss',
                description: 'This book is about a cat in the hat. A very popular and widely loved book.'
            },
            {
                name: 'Fox in Socks',
                author: 'Dr. Seuss',
                description: 'This book is about a Fox in socks. A very popular and widely loved book.'
            },
            {
                name: 'How the Grinch Stole Christmas',
                author: 'Dr. Seuss',
                description: 'This book is about a grinch. A very popular and widely loved book.'
            },
        ]
    }

    public renderBookCard(book: IBook) {
        return (
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                    <Card.Text>
                        {book.description}
                    </Card.Text>
                    <Button variant="primary" href={book.name}>Read this book!</Button>
                </Card.Body>
            </Card>
        );
    }

    public render() {
        return (
            <div className={card_div}>
                <Row>
                    {this.books.map((book: IBook, i: number) => {
                        return (
                        <Col key={i}>
                            {this.renderBookCard(book)}
                        </Col>);
                    })}
                </Row>
            </div>
        );
    }
}