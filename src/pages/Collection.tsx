import React, { useEffect, useState } from "react";

import { fetchCollection, ICollection } from "../lib/collection";

import { CardItem } from "../components/CardItem/CardItem";

import { Loading } from "../components/Loading/Loading";
import ContentLayout from "../components/ContentLayout/ContentLayout";
import AddCta from "../components/AddCta/AddCta";

export const Collection = () => {
  const [collection, setCollection] = useState<ICollection[]>(null);

  const getData = () => {
    fetchCollection()
      .then((response) => {
        setCollection(response.data);
      })
      .catch((err) => {
        console.error(err);
        setCollection(null);
      });
  };

  useEffect(() => {
    // Mocks a delayed response from server
    const fakeDelay = setTimeout(() => {
      getData();
    }, 1500);

    return () => clearInterval(fakeDelay);
  }, []);

  return (
    <ContentLayout>
      <Loading show={collection === null} />
      {!!collection && (
        <>
          <div className="row">
            <div className="col mb-4">
              <h1 className="h2 mb-4">Players</h1>
              <p>
                {collection?.length > 0
                  ? "Showing players in descending order."
                  : "Add your first player to start"}
              </p>
            </div>
          </div>
          <div className="row">
            <AddCta />
            {collection.length > 0 &&
              collection
                .reverse()
                .map((item, i) => <CardItem key={i} data={item} />)}
          </div>
        </>
      )}
    </ContentLayout>
  );
};
