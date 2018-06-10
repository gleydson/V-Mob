package com.ufcqx.vale.valemobilidade.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;

import com.ufcqx.vale.valemobilidade.model.Itinerary;

import java.util.List;

/**
 * Created by samuel on 6/10/18.
 */

public class ItineraryListAdapter extends BaseAdapter {
    private List<Itinerary> itineraries;
    private Context context;
    private LayoutInflater inflater;

    public ItineraryListAdapter(List<Itinerary> itineraries, Context context) {
        this.itineraries = itineraries;
        this.context = context;
        inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }

    @Override
    public int getCount() {
        return itineraries.size();
    }

    @Override
    public Object getItem(int position) {
        return itineraries.get(position);
    }

    @Override
    public long getItemId(int position) {
        return itineraries.get(position).getId();
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        return null;
    }
}
