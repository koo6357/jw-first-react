import styled from "@emotion/styled";
import { useVideos } from "@/pages/Home/hooks/useVideos.ts";
import VideosList from "@/pages/Home/components/VideosList.tsx";
import { useDialog } from "@/hooks/useDialog.tsx";
import Button from "@/ui/Button";

const Home = () => {
  const { videos, isPending, isError } = useVideos();
  const { openDialog, closeDialog } = useDialog();

  const handleDialogButtonClick = () => {
    openDialog({
      title: "업데이트",
      content: "새로운 출시 이벤트 업데이트를\n받으시겠습니까?",
      confirmText: "확인",
      cancelText: "취소",
      onConfirm: () => {
        closeDialog();
        console.log("확인");
      },
      onCancel: () => {
        closeDialog();
        console.log("취소");
      },
    });
  };

  if (isPending) return <p>로딩중입니다...</p>;
  if (isError) return <p>에러가 발생했습니다</p>;

  return (
    <Container>
      <h1>Page Video</h1>
      <Button onClick={handleDialogButtonClick}>Dialog 추가</Button>
      <VideosList data={videos} />
    </Container>
  );
};

const Container = styled.div``;

export default Home;
