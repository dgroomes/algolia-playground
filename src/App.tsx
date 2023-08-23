import algoliasearch from 'algoliasearch/lite';
import {Configure, Highlight, Hits, InstantSearch, Pagination, SearchBox,} from "react-instantsearch";

import type {Hit} from 'instantsearch.js';

import './App.css';

// Algolia app IDs and API keys are not exactly secrets because they are used client-side where anyone can see them. But
// I might still consider omitting them from version control.
const MY_APP_ID = '';
const MY_API_KEY = '';

const searchClient = algoliasearch(MY_APP_ID, MY_API_KEY);

export function App() {
    return (
        <div className="container">
            <InstantSearch searchClient={searchClient} indexName="algolia_blog_demo_index">
                <Configure hitsPerPage={8}/>
                <div className="search-panel">
                    <div className="search-panel__results">
                        <SearchBox placeholder="" className="searchbox"/>
                        <Hits hitComponent={Hit}/>

                        <div className="pagination">
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </InstantSearch>
        </div>
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
