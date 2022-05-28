import React from "react";
import { SizeMe } from "react-sizeme";
import GridLayout from "react-grid-layout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IonButton, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const ContentContainer = styled.div`
  position: absolute;
  top: ${(props) => props.topValue};
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const GridContainer = styled.div`
  overflow: auto;
  height: 100%;
  width: ${(props) => props.widthValue.toString() + "px"};
`;

const GridComp = () => {
  const gridLayouts = useSelector(
    (state) => state.gridViewSlice.layoutObj.gridLayouts
  );
  const buttons = useSelector((state) => state.gridViewSlice.layoutObj.buttons);
  const displays = useSelector(
    (state) => state.gridViewSlice.layoutObj.displays
  );
  const isHeaderEnabled = useSelector(
    (state) => state.gridViewSlice.layoutObj.isHeaderEnabled
  );
  const headerTopValue = useSelector(
    (state) => state.gridViewSlice.layoutObj.headerTopValue
  );
  const headerTitle = useSelector(
    (state) => state.gridViewSlice.layoutObj.headerTitle
  );
  return (
    <SizeMe>
      {({ size }) => (
        <>
          {isHeaderEnabled && (
            <IonHeader>
              <IonToolbar>
                <IonTitle>{headerTitle}</IonTitle>
              </IonToolbar>
            </IonHeader>
          )}
          <ContentContainer topValue={headerTopValue}>
            <GridContainer widthValue={size.width}>
              <GridLayout
                className="layout"
                layout={gridLayouts}
                cols={5}
                rowHeight={35}
                width={size.width}
              >
                {Object.keys(buttons).map((index) => {
                  return (
                    <IonButton
                      color={buttons[index].color}
                      key={buttons[index].key}
                    >
                      {buttons[index].name}
                    </IonButton>
                  );
                })}
                {Object.keys(displays).map((index) => {
                  return (
                    <div
                      className="shadow-1 br2 mt2 mb2"
                      key={displays[index].key}
                    >
                      <span className="pa1 fw6 f4 tc shadow-1">
                        {displays[index].header}
                      </span>
                    </div>
                  );
                })}
              </GridLayout>
            </GridContainer>
          </ContentContainer>
        </>
      )}
    </SizeMe>
  );
};

export default GridComp;
