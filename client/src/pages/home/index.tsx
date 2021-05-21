import React, { ReactElement, useEffect } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'

interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <div className="overflow-x-hidden antialiased bg-">
      <Header></Header>
      <Banner></Banner>
      <div
        id="features"
        className="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0"
      >
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
          <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
            功能特点
          </h2>
          <h3 className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
            为您打造和设计
          </h3>
          <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">
            <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <svg
                  className="absolute w-full h-full text-gray-100 fill-current"
                  viewBox="0 0 377 340"
                >
                  <g>
                    <g>
                      <path d="M342.8 3.7c24.7 14 18.1 75 22.1 124s18.6 85.8 8.7 114.2c-9.9 28.4-44.4 48.3-76.4 62.4-32 14.1-61.6 22.4-95.9 28.9-34.3 6.5-73.3 11.1-95.5-6.2-22.2-17.2-27.6-56.5-47.2-96C38.9 191.4 5 151.5.9 108.2-3.1 64.8 22.7 18 61.8 8.7c39.2-9.2 91.7 19 146 16.6 54.2-2.4 110.3-35.6 135-21.6z"></path>
                    </g>
                  </g>
                </svg>
                <svg className="relative w-20 h-20" viewBox="0 0 58 58">
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                      id="linearGradient-1TriangleIcon1"
                    >
                      <stop stop-color="#9C09DB" offset="0%"></stop>
                      <stop stop-color="#1C0FD7" offset="100%"></stop>
                    </linearGradient>
                    <filter
                      x="-14%"
                      y="-10%"
                      width="128%"
                      height="128%"
                      filterUnits="objectBoundingBox"
                      id="filter-3TriangleIcon1"
                    >
                      <feOffset
                        dy="2"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      ></feOffset>
                      <feGaussianBlur
                        stdDeviation="2"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      ></feGaussianBlur>
                      <feColorMatrix
                        values="0 0 0 0 0.141176471 0 0 0 0 0.031372549 0 0 0 0 0.501960784 0 0 0 0.15 0"
                        in="shadowBlurOuter1"
                      ></feColorMatrix>
                    </filter>
                    <path
                      d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                      id="path-2TriangleIcon1"
                    ></path>
                  </defs>
                  <g
                    id="Page-1TriangleIcon1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Desktop-HDTriangleIcon1"
                      transform="translate(-291 -1278)"
                    >
                      <g
                        id="FeaturesTriangleIcon1"
                        transform="translate(170 915)"
                      >
                        <g
                          id="Group-9TriangleIcon1"
                          transform="translate(0 365)"
                        >
                          <g
                            id="Group-8TriangleIcon1"
                            transform="translate(125)"
                          >
                            <g id="Rectangle-9TriangleIcon1">
                              <use
                                fill="#000"
                                filter="url(#filter-3TriangleIcon1)"
                                xlinkHref="#path-2TriangleIcon1"
                              ></use>
                              <use
                                fill="url(#linearGradient-1TriangleIcon1)"
                                xlinkHref="#path-2TriangleIcon1"
                              ></use>
                            </g>
                            <g
                              id="playTriangleIcon1"
                              transform="translate(18 15)"
                              fill="#FFF"
                              fill-rule="nonzero"
                            >
                              <path
                                d="M9.432 2.023l8.919 14.879a1.05 1.05 0 01-.384 1.452 1.097 1.097 0 01-.548.146H-.42A1.07 1.07 0 01-1.5 17.44c0-.19.052-.375.15-.538L7.567 2.023a1.092 1.092 0 011.864 0z"
                                id="TriangleIcon1"
                                transform="rotate(90 8.5 10)"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <h4 className="relative mt-6 text-lg font-bold">自动化工具</h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  自动化工作流程
                </p>
                <a
                  href="#_"
                  className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                >
                  了解更多
                </a>
              </div>
            </div>

            <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <svg
                  className="absolute w-full h-full text-gray-100 fill-current"
                  viewBox="0 0 358 372"
                >
                  <g>
                    <g>
                      <path d="M315.7 6.5c30.2 15.1 42.6 61.8 41.5 102.5-1.1 40.6-15.7 75.2-24.3 114.8-8.7 39.7-11.3 84.3-34.3 107.2-23 22.9-66.3 23.9-114.5 30.7-48.2 6.7-101.3 19.1-123.2-4.1-21.8-23.2-12.5-82.1-21.6-130.2C30.2 179.3 2.6 141.9.7 102c-2-39.9 21.7-82.2 57.4-95.6 35.7-13.5 83.3 2.1 131.2 1.7 47.9-.4 96.1-16.8 126.4-1.6z"></path>
                    </g>
                  </g>
                </svg>
                <svg className="relative w-20 h-20" viewBox="0 0 58 58">
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                      id="linearGradient-1Icon2"
                    >
                      <stop stop-color="#F2C314" offset="0%"></stop>
                      <stop stop-color="#FC3832" offset="100%"></stop>
                    </linearGradient>
                    <filter
                      x="-14%"
                      y="-10%"
                      width="128%"
                      height="128%"
                      filterUnits="objectBoundingBox"
                      id="filter-3Icon2"
                    >
                      <feOffset
                        dy="2"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      ></feOffset>
                      <feGaussianBlur
                        stdDeviation="2"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      ></feGaussianBlur>
                      <feColorMatrix
                        values="0 0 0 0 0.501960784 0 0 0 0 0.125490196 0 0 0 0 0 0 0 0 0.15 0"
                        in="shadowBlurOuter1"
                      ></feColorMatrix>
                    </filter>
                    <path
                      d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                      id="path-2Icon2"
                    ></path>
                  </defs>
                  <g
                    id="Page-1Icon2"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g id="Desktop-HDIcon2" transform="translate(-691 -1278)">
                      <g id="FeaturesIcon2" transform="translate(170 915)">
                        <g
                          id="Group-9-CopyIcon2"
                          transform="translate(400 365)"
                        >
                          <g id="Group-8Icon2" transform="translate(125)">
                            <g id="Rectangle-9Icon2">
                              <use
                                fill="#000"
                                filter="url(#filter-3Icon2)"
                                xlinkHref="#path-2Icon2"
                              ></use>
                              <use
                                fill="url(#linearGradient-1Icon2)"
                                xlinkHref="#path-2Icon2"
                              ></use>
                            </g>
                            <g
                              id="machine-learningIcon2"
                              transform="translate(14 12)"
                              fill="#FFF"
                              fill-rule="nonzero"
                            >
                              <path
                                d="M10.554 21.418v-2.68c-1.1-.204-1.932-1.143-1.932-2.271 0-.468.143-.903.388-1.267l-2.32-1.662L4.367 15.2a2.254 2.254 0 01-.005 2.541l5.28 4.05c.268-.182.577-.311.911-.373zm.892 0c.334.062.643.191.912.373l5.28-4.05a2.254 2.254 0 01-.006-2.54l-2.321-1.663L12.99 15.2c.245.364.388.8.388 1.267 0 1.128-.832 2.067-1.932 2.27v2.681zm1.538.997c.25.365.394.803.394 1.274C13.378 24.965 12.314 26 11 26s-2.378-1.035-2.378-2.311c0-.471.145-.91.394-1.274l-5.28-4.05c-.385.26-.853.413-1.358.413C1.065 18.778 0 17.743 0 16.467c0-1.129.832-2.068 1.932-2.27v-2.393C.832 11.6 0 10.662 0 9.534c0-1.277 1.065-2.312 2.378-2.312.505 0 .973.153 1.358.414l5.28-4.05a2.254 2.254 0 01-.394-1.275C8.622 1.035 9.686 0 11 0s2.378 1.035 2.378 2.311c0 .471-.145.91-.394 1.274l5.28 4.05c.385-.26.853-.413 1.358-.413C20.935 7.222 22 8.257 22 9.533c0 1.129-.832 2.068-1.932 2.27v2.393c1.1.203 1.932 1.142 1.932 2.27 0 1.277-1.065 2.312-2.378 2.312-.505 0-.973-.153-1.358-.414l-5.28 4.05zm-9.243-7.843L5.937 13l-2.196-1.572c-.27.183-.58.314-.917.376v2.392c.336.062.647.193.917.376zm.627-3.772l2.321 1.662L9.01 10.8a2.254 2.254 0 01-.388-1.267c0-1.128.832-2.067 1.932-2.27V4.582a2.403 2.403 0 01-.912-.373l-5.28 4.05a2.254 2.254 0 01.006 2.54zm13.89 3.772c.27-.183.582-.314.918-.376v-2.392a2.403 2.403 0 01-.917-.376L16.063 13l2.196 1.572zm-.62-6.313l-5.28-4.05a2.403 2.403 0 01-.912.373v2.68c1.1.204 1.932 1.143 1.932 2.271 0 .468-.143.903-.388 1.267l2.32 1.662 2.322-1.662a2.254 2.254 0 01.005-2.541zm-8 6.313A2.415 2.415 0 0111 14.156c.507 0 .977.154 1.363.416L14.559 13l-2.196-1.572a2.415 2.415 0 01-1.363.416c-.507 0-.977-.154-1.363-.416L7.441 13l2.196 1.572zM11 10.978c.821 0 1.486-.647 1.486-1.445 0-.797-.665-1.444-1.486-1.444s-1.486.647-1.486 1.444c0 .798.665 1.445 1.486 1.445zm0 6.933c.821 0 1.486-.647 1.486-1.444 0-.798-.665-1.445-1.486-1.445s-1.486.647-1.486 1.445c0 .797.665 1.444 1.486 1.444zm8.622-6.933c.82 0 1.486-.647 1.486-1.445 0-.797-.665-1.444-1.486-1.444s-1.487.647-1.487 1.444c0 .798.666 1.445 1.487 1.445zm0 6.933c.82 0 1.486-.647 1.486-1.444 0-.798-.665-1.445-1.486-1.445s-1.487.647-1.487 1.445c0 .797.666 1.444 1.487 1.444zM2.378 10.978c.821 0 1.487-.647 1.487-1.445 0-.797-.666-1.444-1.487-1.444-.82 0-1.486.647-1.486 1.444 0 .798.665 1.445 1.486 1.445zm0 6.933c.821 0 1.487-.647 1.487-1.444 0-.798-.666-1.445-1.487-1.445-.82 0-1.486.647-1.486 1.445 0 .797.665 1.444 1.486 1.444zM11 25.133c.821 0 1.486-.646 1.486-1.444 0-.798-.665-1.445-1.486-1.445s-1.486.647-1.486 1.445.665 1.444 1.486 1.444zm0-21.377c.821 0 1.486-.647 1.486-1.445S11.821.867 11 .867s-1.486.646-1.486 1.444c0 .798.665 1.445 1.486 1.445z"
                                id="ShapeIcon2"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <h4 className="relative mt-6 text-lg font-bold">机器学习</h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  你将学习如何更好的转换和生成代码
                </p>
                <a
                  href="#_"
                  className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                >
                  了解更多
                </a>
              </div>
            </div>

            <div className="w-full max-w-md p-4 mx-auto mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <svg
                  className="absolute w-full h-full text-gray-100 fill-current"
                  viewBox="0 0 378 410"
                >
                  <g>
                    <g>
                      <path d="M305.9 14.4c23.8 24.6 16.3 84.9 26.6 135.1 10.4 50.2 38.6 90.3 43.7 137.8 5.1 47.5-12.8 102.4-50.7 117.4-37.9 15.1-95.7-9.8-151.7-12.2-56.1-2.5-110.3 17.6-130-3.4-19.7-20.9-4.7-82.9-11.5-131.2C25.5 209.5-3 174.7 1.2 147c4.2-27.7 41-48.3 75-69.6C110.1 56.1 141 34.1 184 17.5c43.1-16.6 98.1-27.7 121.9-3.1z"></path>
                    </g>
                  </g>
                </svg>
                <svg className="relative w-20 h-20" viewBox="0 0 58 58">
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                      id="linearGradient-1Icon3"
                    >
                      <stop stop-color="#32FBFC" offset="0%"></stop>
                      <stop stop-color="#3214F2" offset="100%"></stop>
                    </linearGradient>
                    <filter
                      x="-14%"
                      y="-10%"
                      width="128%"
                      height="128%"
                      filterUnits="objectBoundingBox"
                      id="filter-3Icon3"
                    >
                      <feOffset
                        dy="2"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      ></feOffset>
                      <feGaussianBlur
                        stdDeviation="2"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      ></feGaussianBlur>
                      <feColorMatrix
                        values="0 0 0 0 0.031372549 0 0 0 0 0.149019608 0 0 0 0 0.658823529 0 0 0 0.15 0"
                        in="shadowBlurOuter1"
                      ></feColorMatrix>
                    </filter>
                    <path
                      d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                      id="path-2Icon3"
                    ></path>
                  </defs>
                  <g
                    id="Page-1Icon3"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g id="Desktop-HDIcon3" transform="translate(-1091 -1278)">
                      <g id="FeaturesIcon3" transform="translate(170 915)">
                        <g
                          id="Group-9-Copy-2Icon3"
                          transform="translate(800 365)"
                        >
                          <g id="Group-8Icon3" transform="translate(125)">
                            <g id="Rectangle-9Icon3">
                              <use
                                fill="#000"
                                filter="url(#filter-3Icon3)"
                                xlinkHref="#path-2Icon3"
                              ></use>
                              <use
                                fill="url(#linearGradient-1Icon3)"
                                xlinkHref="#path-2Icon3"
                              ></use>
                            </g>
                            <g
                              id="smart-notificationsIcon3"
                              transform="translate(15 11)"
                              fill="#FFF"
                              fill-rule="nonzero"
                            >
                              <path
                                d="M12.519 3.243a6.808 6.808 0 00-.187 1.298h-8.44a2.595 2.595 0 00-2.595 2.594v12.973a2.595 2.595 0 002.595 2.595h12.973a2.595 2.595 0 002.594-2.595v-8.44c.445-.02.88-.084 1.298-.187v8.627A3.892 3.892 0 0116.865 24H3.892A3.892 3.892 0 010 20.108V7.135a3.892 3.892 0 013.892-3.892h8.627zm6.616 6.487a4.865 4.865 0 110-9.73 4.865 4.865 0 010 9.73z"
                                id="IconIcon3"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <h4 className="relative mt-6 text-lg font-bold">团队分享</h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  团队直接共享协作
                </p>
                <a
                  href="#_"
                  className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                >
                  了解更多
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="testimonials"
        className="flex items-center justify-center w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex-col items-center ">
            <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
              <p className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
                客户评价
              </p>
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                评价
              </h2>
              <p className="my-6 text-xl font-medium text-gray-500">
                DOM 嵌套合理、相对定位布局、文本自适应 、循环可自动生成
              </p>
            </div>
            <div className="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
              <div className="w-full xl:w-1/2 xl:pr-8">
                <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                  <div className="flex flex-col pr-8">
                    <div className="relative pl-12">
                      <svg
                        className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                        viewBox="0 0 100 125"
                      >
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                      </svg>
                      <p className="mt-2 text-base text-gray-600">
                        I'm loving these function! Very nice features and
                        layouts.
                      </p>
                    </div>

                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                      Sandra Walton{' '}
                      <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                        - CEO SomeCompany
                      </span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                  </div>
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2694&amp;q=80"
                    alt=""
                  />
                </blockquote>
                <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 mb-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease xl:mb-0">
                  <div className="flex flex-col pr-10">
                    <div className="relative pl-12">
                      <svg
                        className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                        viewBox="0 0 100 125"
                      >
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                      </svg>
                      <p className="mt-2 text-base text-gray-600">
                        Really digging this service. Now I can quickly bootstrap
                        any project.
                      </p>
                    </div>
                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                      Kenny Jones{' '}
                      <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                        - CEO SomeCompany
                      </span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                  </div>
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"
                    alt=""
                  />
                </blockquote>
              </div>
              <div className="w-full xl:w-1/2 xl:pl-8">
                <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                  <div className="flex flex-col pr-10">
                    <div className="relative pl-12">
                      <svg
                        className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                        viewBox="0 0 100 125"
                      >
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                      </svg>
                      <p className="mt-2 text-base text-gray-600">
                        Extremely helpful in every single project we have
                        released.
                      </p>
                    </div>

                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                      Mike Smith
                      <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                        - CEO SomeCompany
                      </span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                  </div>
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80"
                    alt=""
                  />
                </blockquote>
                <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                  <div className="flex flex-col pr-10">
                    <div className="relative pl-12">
                      <svg
                        className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                        viewBox="0 0 100 125"
                      >
                        <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                      </svg>
                      <p className="mt-2 text-base text-gray-600">
                        Finally a quick and easy system I can use for any type
                        of project.
                      </p>
                    </div>

                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                      Molly Sanchez{' '}
                      <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                        - CEO SomeCompany
                      </span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                  </div>
                  <img
                    className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2700&amp;q=80"
                    alt=""
                  />
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="px-4 pt-12 pb-8 text-white bg-white border-t border-gray-200">
        <div className="container flex flex-col justify-between max-w-6xl px-4 mx-auto overflow-hidden lg:flex-row">
          <div className="w-full pl-12 mr-4 text-left lg:w-1/4 sm:text-center sm:pl-0 lg:text-left">
            <a
              href="/"
              className="flex justify-start text-left sm:text-center lg:text-left sm:justify-center lg:justify-start"
            >
              <span className="flex items-start sm:items-center">
                <svg
                  className="w-auto h-6 text-gray-800 fill-current"
                  viewBox="0 0 194 116"
                >
                  <g fill-rule="evenodd">
                    <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z"></path>
                    <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z"></path>
                  </g>
                </svg>
              </span>
            </a>
            <p className="mt-6 mr-4 text-base text-gray-500">
              触手可及 创建应用
            </p>
          </div>
          <div className="block w-full pl-10 mt-6 text-sm lg:w-3/4 sm:flex lg:mt-0">
            <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
              <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
                产品
              </li>
              <li>
                <a
                  href="#_"
                  className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
                >
                  Pricing
                </a>
              </li>
            </ul>
            <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
              <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
                公司
              </li>
              <li>
                <a
                  href="#_"
                  className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
            <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
              <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
                技术栈
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
                >
                  Tailwind
                </a>
              </li>
              <li>
                <a
                  href="http://vitejs.dev/"
                  className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
                >
                  vite
                </a>
              </li>
              <li>
                <a
                  href="https://ant.design/"
                  className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600"
                >
                  antd
                </a>
              </li>
            </ul>
            <div className="flex flex-col w-full text-gray-700">
              <div className="inline-block px-3 py-2 mt-5 font-bold text-gray-800 uppercase md:mt-0">
                关注我们
              </div>
              <div className="flex justify-start pl-4 mt-2">
                <a
                  className="flex items-center  mr-6 text-gray-400 no-underline hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="###"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"></path>
                  </svg>
                </a>
                <a
                  className="flex items-center  mr-6 text-gray-400 no-underline hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="###"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </a>
                <a
                  className="flex items-center text-gray-400 no-underline hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/maqi1520/react-antd-low-code"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 mt-10 text-center text-gray-400 border-t border-gray-100">
          © 2020 Low Code Generator. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
