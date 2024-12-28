import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import style from "./style.module.css";

 const Example = () => {
    return (
        <div className={style.container}>
       <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Вопрос 1
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Наша обувь соответствует все мировым стандартам.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <br />
            <hr />
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Вопрос 2
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Качество строго контралируется производителем и идет неприрывная работа по улучшению продукции.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <br />
            <hr />
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Вопрос 3
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Мы следим за отзывами о нашем товаре и быстро на них реагируем.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <br />
            <hr />
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Вопрос 4
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Обновление ассортимента происходит ежемесячно.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <br />
            <hr />
        </Accordion>
        </div>
 
    );
}

export default Example;
