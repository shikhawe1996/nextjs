"use client"
import React from 'react';

export const TabPage = () => (
    <Tabs>
        <Tab title="Company">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem
        </Tab>
        <Tab title="Infomation">
            Resource Library
            Find documents, videos and webinars here to enrich your discovery of our solutions. To find the resource you&apos;re interested filter by resource type, product, solution or a key word search.
        </Tab>
        <Tab title="Hotel Owner">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem
        </Tab>
    </Tabs>
);


/* Tab logic */

const style = {
    notSelected: `border-b text-3xl`,
    selected: `text-gray-700 text-3xl border-b-2 border-orange `,
    default: `-mb-2 text-white text-3xl font-bold mb-2 md:px-8 py-4 md:py-1 inline-block focus:outline-none `,
};

function Tabs({ children }) {
    const childrenArray = React.Children.toArray(children);
    const [current, setCurrent] = React.useState(childrenArray[0].key);

    const newChildren = childrenArray.map((child) =>
        React.cloneElement(child, { selected: child?.key === current }),
    );

    return (
        <nav className='p-[160px]' >
            {childrenArray.map((child) => (
                <div
                    role="link"
                    tabIndex={0}
                    onClick={() => setCurrent(child?.key)}
                    key={child?.key}
                    className={`  ${style.default} 
            ${current === child?.key ? style.selected : style.notSelected}`}
                >
                    {child?.props.title}
                </div>
            ))}
            <section className>{newChildren}</section>

        </nav>
    );
}

function Tab({ children, selected }) {
    return (
        <div hidden={!selected} className="mt-[30px] text-xl text-semibold">
            {children}
        </div>
    );
}

export default TabPage;
