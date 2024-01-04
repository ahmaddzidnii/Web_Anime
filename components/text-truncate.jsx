"use client";
export const TextTruncation = ({
  originalText,
  maxLength = 10,
  className = "",
}) => {
  // Memotong teks jika lebih dari 10 huruf
  const truncatedText =
    originalText?.length > maxLength
      ? `${originalText?.slice(0, maxLength)}...`
      : originalText;

  return <p className={className}>{truncatedText}</p>;
};
