import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import RTE from "../RTE";
import appwriteSerice from "../../appwrite/config";
import { useNavigate } from "react-router-dom";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        is_published: post?.is_published || "true",
        author: post?.author || "",
        tags: post?.tags || "",
        date: post?.date || "",
        excerpt: post?.excerpt || "",
      },
    });

  const navigate = useNavigate();

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteSerice.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteSerice.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteSerice.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/blog/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteSerice.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteSerice.createPost(data);

        if (dbPost) {
          navigate(`/blog/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
  }, []);

  React.useEffect(() => {
    watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content: "
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
        <Input
          label="Excerpt"
          placeholder="Excerpt"
          className="mb-4"
          {...register("excerpt", { required: true })}
        />
        <Input
          label="Author"
          placeholder="Author"
          className="mb-4"
          {...register("author", { required: true })}
        />
        <Input
          label="Tags"
          placeholder="Tags"
          className="mb-4"
          {...register("tags", { required: true })}
        />
        <Input
          label="Date"
          type="date"
          className="mb-4"
          {...register("date", { required: true })}
        />
      </div>
      <div className="1/3 px-2">
        <Input
          label="Featured Image"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteSerice.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
