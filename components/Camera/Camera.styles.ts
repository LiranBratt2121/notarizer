import styled from "@emotion/styled";

const CameraWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: black;
  user-select: none;
`;

const VideoFeed = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const TopBar = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  text-align: center;
  color: white;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: transparent;
  z-index: 10;
`;

const ShutterButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 5px solid white;
  background: transparent;
  cursor: pointer;
  transition: transform 0.1s ease;
  
  &:active {
    transform: scale(0.9);
  }
`;

const PreviewImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: black;
  z-index: 1;
`;

const PreviewControls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const PreviewButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  border: none;
  background: white;
  font-weight: 600;
  cursor: pointer;
`;

export {
  CameraWrapper,
  VideoFeed,
  TopBar,
  BottomBar,
  ShutterButton,
  PreviewImage,
  PreviewControls,
  PreviewButton,
};