import React from "react";

const Page = (props: any) => {
  return (
    <div className="p-2">
      <div>{props.label}</div>
      <div className="flex justify-between p-3">
        <button className="mx-3 font-semibold" onClick={props.moveBackward}>
          prev
        </button>
        <button className="mx-3 font-semibold" onClick={props.moveForward}>
          next
        </button>
      </div>
    </div>
  );
};

const CreatePost = () => {
  const [post, setPost] = React.useState<any>({
    title: "",
  });

  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const moveForward = () => {
    if (currentPage === 3) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  const moveBackward = () => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const FORM: any = {
    0: {
      component: (
        <Page
          label={
            "You can add posts, discoveries, collections to profile for your viewers to connect with you."
          }
          moveForward={moveForward}
          moveBackward={moveBackward}
        />
      ),
    },
    1: {
      component: (
        <Page
          label={"Page 2"}
          moveForward={moveForward}
          moveBackward={moveBackward}
        />
      ),
    },
    2: {
      component: (
        <Page
          label={"Page 3"}
          moveForward={moveForward}
          moveBackward={moveBackward}
        />
      ),
    },
    3: {
      component: (
        <Page
          label={"Page 4"}
          moveForward={moveForward}
          moveBackward={moveBackward}
        />
      ),
    },
  };

  return (
    <div className="bg-white">
      FORM {currentPage}
      {FORM[currentPage as keyof typeof FORM].component}
    </div>
  );
};

export default CreatePost;
