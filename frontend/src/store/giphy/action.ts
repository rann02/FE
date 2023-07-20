import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const types = {
  FETCHIRONMAN: "fetchironman",
  FETCHRANDOM: "fetchrandom",
};

export interface DataIF {
  data: Array<{
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: {
      original: {
        height: string;
        width: string;
        size: string;
        url: string;
        mp4_size: string;
        mp4: string;
        webp_size: string;
        webp: string;
        frames: string;
        hash: string;
      };
      fixed_height: {
        height: string;
        width: string;
        size: string;
        url: string;
        mp4_size: string;
        mp4: string;
        webp_size: string;
        webp: string;
      };
      fixed_height_downsampled: {
        height: string;
        width: string;
        size: string;
        url: string;
        webp_size: string;
        webp: string;
      };
      fixed_height_small: {
        height: string;
        width: string;
        size: string;
        url: string;
        mp4_size: string;
        mp4: string;
        webp_size: string;
        webp: string;
      };
      fixed_width: {
        height: string;
        width: string;
        size: string;
        url: string;
        mp4_size: string;
        mp4: string;
        webp_size: string;
        webp: string;
      };
      fixed_width_downsampled: {
        height: string;
        width: string;
        size: string;
        url: string;
        webp_size: string;
        webp: string;
      };
      fixed_width_small: {
        height: string;
        width: string;
        size: string;
        url: string;
        mp4_size: string;
        mp4: string;
        webp_size: string;
        webp: string;
      };
    };
    analytics_response_payload: string;
    analytics: {
      onload: {
        url: string;
      };
      onclick: {
        url: string;
      };
      onsent: {
        url: string;
      };
    };
  }>;
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
}

export const getIronman = createAsyncThunk(
  types.FETCHIRONMAN,
  async (_data: { search?: string }, thunkAPI) => {
    try {
      let query = "ironman";
      if (!!_data.search) {
        query = _data.search;
      }
      const res = await axios.get<DataIF>(
        `https://api.giphy.com/v1/gifs/search?api_key=tC8nTQdsj71xzZeowYV3TXEQ8EMkhvbz&q=${query}&limit=9&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      );
      return res.data.data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);

export const getRandom = createAsyncThunk(
  types.FETCHRANDOM,
  async (_data, thunkAPI) => {
    try {
      const res = await axios.get<DataIF>(
        "https://api.giphy.com/v1/gifs/trending?api_key=tC8nTQdsj71xzZeowYV3TXEQ8EMkhvbz&limit=9&offset=0&rating=g&bundle=messaging_non_clips"
      );
      return res.data.data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error);
    }
  }
);
