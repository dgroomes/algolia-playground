import algoliasearch from 'algoliasearch/lite';
import {Configure, Highlight, Hits, InstantSearch, Pagination, SearchBox, RefinementList} from "react-instantsearch";

import type {Hit} from 'instantsearch.js';

import './App.css';

// Algolia app IDs and API keys are not exactly secrets because they are used client-side where anyone can see them. But
// I might still consider omitting them from version control.
const {ALGOLIA_APP_ID, ALGOLIA_API_KEY} = process.env;

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

export function App() {
    return (
        <InstantSearch searchClient={searchClient} indexName="algolia_blog_demo_index">
            <Configure hitsPerPage={8}/>
            <RefinementList attribute="author_name" className="sidebar" />
            <div className="main-content">
                <SearchBox placeholder="" className="searchbox"/>
                <Hits hitComponent={Hit}/>
                <Pagination className="pagination"/>
            </div>
        </InstantSearch>
    );
}

type HitProps = {
    hit: Hit;
};

function Hit({hit}: HitProps) {
    return (
        <article>
            <h1>
                <Highlight attribute="post_title" hit={hit}/>
            </h1>
            <p>
                <Highlight attribute="author_name" hit={hit}/>
            </p>
            <p>
                <Highlight attribute="content" hit={hit}/>
            </p>
        </article>
    );
}
